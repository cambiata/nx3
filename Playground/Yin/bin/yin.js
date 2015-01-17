/* Copyright 2014 Alejandro PÃ©rez GonzÃ¡lez de Martos

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/* 
   Yin Pitch Tracking Algorithm implemented by Alejandro PÃ©rez (2014)
   (http://recherche.ircam.fr/equipes/pcm/cheveign/ps/2002_JASA_YIN_proof.pdf)
*/

// PARAMETERS
var yinThreshold = 0.15; // allowed uncertainty (e.g 0.05 will return a pitch with ~95% probability)
var yinProbability = 0.0; // READONLY: contains the certainty of the note found as a decimal (i.e 0.3 is 30%)

function Yin_pitchEstimation(inputBuffer, sampleRate) {
  var yinBuffer = new Float32Array(Math.floor(inputBuffer.length/2));
  yinBuffer[0] = 1;
  var runningSum = 0;
  var pitchInHz = 0.0;
  var foundTau = false;
  var minTauValue;
  var minTau = 0;

  for (var tau=1; tau<Math.floor(inputBuffer.length/2); tau++) {
    // Step 1: Calculates the squared difference of the signal with a shifted version of itself.
    yinBuffer[tau] = 0;
    for (var i=0; i<Math.floor(inputBuffer.length/2); i++) {
      yinBuffer[tau] += Math.pow(((inputBuffer[i]-128)/128)-((inputBuffer[i+tau]-128)/128),2);
    }
    // Step 2: Calculate the cumulative mean on the normalised difference calculated in step 1.
    runningSum += yinBuffer[tau];
    yinBuffer[tau] = yinBuffer[tau]*(tau/runningSum);

    // Step 3: Check if the current normalised cumulative mean is over the threshold.
    if (tau > 1) {
      if (foundTau) {
        if (yinBuffer[tau] < minTauValue) {
          minTauValue = yinBuffer[tau];
          minTau = tau;
        }
        else break;
      }
      else if (yinBuffer[tau] < yinThreshold) {
        foundTau = true;
        minTau = tau;
        minTauValue = yinBuffer[tau];
      }
    }
  }

  if (minTau == 0) {
    yinProbability = 0;
    pitchInHz = 0.0;
  }
  else {
    // Step 4: Interpolate the shift value (tau) to improve the pitch estimate.
    minTau += (yinBuffer[minTau+1]-yinBuffer[minTau-1])/(2*((2*yinBuffer[minTau])-yinBuffer[minTau-1]-yinBuffer[minTau+1]));
    pitchInHz = sampleRate/minTau;
    yinProbability = 1-minTauValue;
  }

  return pitchInHz;
}
