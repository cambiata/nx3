

import java.awt.*;
import java.awt.geom.*;
import javax.swing.Icon; 

/**
 * This class has been automatically generated using svg2java
 * 
 */
public class ResultingClassName implements Icon {
	
	private float origAlpha = 1.0f;

	/**
	 * Paints the transcoded SVG image on the specified graphics context. You
	 * can install a custom transformation on the graphics context to scale the
	 * image.
	 * 
	 * @param g
	 *            Graphics context.
	 */
	public void paint(Graphics2D g) {
		g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        origAlpha = 1.0f;
        Composite origComposite = g.getComposite();
        if (origComposite instanceof AlphaComposite) {
            AlphaComposite origAlphaComposite = 
                (AlphaComposite)origComposite;
            if (origAlphaComposite.getRule() == AlphaComposite.SRC_OVER) {
                origAlpha = origAlphaComposite.getAlpha();
            }
        }
        
		// _0
		AffineTransform trans_0 = g.getTransform();
		paintRootGraphicsNode_0(g);
		g.setTransform(trans_0);

	}

	private void paintShapeNode_0_0_0_0(Graphics2D g) {
		GeneralPath shape0 = new GeneralPath();
		shape0.moveTo(95.72971, 266.7949);
		shape0.curveTo(90.15467, 269.58765, 83.244736, 270.98398, 75.00461, 270.98398);
		shape0.curveTo(65.304794, 270.98398, 56.005226, 269.314, 47.094116, 265.9764);
		shape0.curveTo(38.185356, 262.63644, 30.336046, 258.11478, 23.548536, 252.40666);
		shape0.curveTo(16.761026, 246.70328, 11.306056, 240.02573, 7.185997, 232.37637);
		shape0.curveTo(3.065927, 224.72704, 1.005897, 216.5918, 1.005897, 207.97066);
		shape0.curveTo(1.005897, 178.70831, 21.733358, 146.6556, 63.190617, 111.81016);
		shape0.curveTo(61.855717, 106.46765, 60.857487, 101.06617, 60.191208, 95.601006);
		shape0.curveTo(59.524937, 90.14056, 59.190628, 84.49377, 59.190628, 78.662994);
		shape0.curveTo(59.190628, 70.65277, 59.85455, 62.79113, 61.187088, 55.08046);
		shape0.curveTo(62.51729, 47.369793, 64.426636, 40.145027, 66.910446, 33.406136);
		shape0.curveTo(69.396614, 26.66727, 72.45253, 20.536942, 76.08759, 15.012819);
		shape0.curveTo(79.720314, 9.486317, 83.901596, 4.841977, 88.62436, 1.0821829);
		shape0.curveTo(105.09991, 23.907566, 113.33533, 45.706905, 113.33533, 66.4684);
		shape0.curveTo(113.33533, 79.94851, 110.15464, 92.7894, 103.79091, 104.99108);
		shape0.curveTo(97.42953, 117.19512, 87.46132, 129.06187, 73.88866, 140.60075);
		shape0.lineTo(81.886284, 179.0291);
		shape0.curveTo(86.24884, 178.67294, 88.6738, 178.49603, 89.15878, 178.49603);
		shape0.curveTo(95.21645, 178.49603, 100.883316, 179.58812, 106.15464, 181.77466);
		shape0.curveTo(111.42832, 183.95883, 116.03573, 186.96385, 119.98157, 190.78735);
		shape0.curveTo(123.92506, 194.61084, 127.0516, 199.13252, 129.35884, 204.35237);
		shape0.curveTo(131.66373, 209.57224, 132.81734, 215.2143, 132.81969, 221.28566);
		shape0.curveTo(132.81769, 225.65402, 132.03099, 229.96577, 130.45595, 234.21147);
		shape0.curveTo(128.8809, 238.4619, 126.641945, 242.50003, 123.73436, 246.32117);
		shape0.curveTo(120.82442, 250.14703, 117.37063, 253.66388, 113.372986, 256.8788);
		shape0.curveTo(109.37534, 260.09845, 104.95158, 262.86053, 100.10403, 265.1674);
		shape0.curveTo(100.10403, 264.92444, 100.28532, 265.62262, 100.64788, 267.25958);
		shape0.curveTo(101.0128, 268.8989, 101.46718, 271.05005, 102.01103, 273.7225);
		shape0.curveTo(102.557236, 276.39258, 103.1929, 279.36694, 103.92038, 282.64557);
		shape0.curveTo(104.64787, 285.9218, 105.28354, 289.07782, 105.82974, 292.1111);
		shape0.curveTo(106.375946, 295.1468, 106.85858, 297.84988, 107.28471, 300.21335);
		shape0.curveTo(107.708496, 302.58386, 107.92039, 304.19016, 107.92039, 305.0393);
		shape0.curveTo(107.92039, 310.74506, 106.70791, 315.9649, 104.28531, 320.69888);
		shape0.curveTo(101.86036, 325.43283, 98.587845, 329.4993, 94.46543, 332.89822);
		shape0.curveTo(90.34537, 336.29477, 85.55668, 338.93655, 80.10407, 340.81882);
		shape0.curveTo(74.6491, 342.70108, 68.890434, 343.6422, 62.828053, 343.6422);
		shape0.curveTo(58.222992, 343.6422, 53.921642, 342.91336, 49.919304, 341.45566);
		shape0.curveTo(45.919304, 339.99796, 42.404305, 337.93408, 39.374283, 335.26636);
		shape0.curveTo(36.346634, 332.5939, 33.952282, 329.35068, 32.193604, 325.5272);
		shape0.curveTo(30.437283, 321.70605, 29.559113, 317.48865, 29.559113, 312.87735);
		shape0.curveTo(29.559113, 309.59872, 30.105322, 306.5017, 31.195374, 303.59106);
		shape0.curveTo(32.285423, 300.6804, 33.801605, 298.19196, 35.739212, 296.12805);
		shape0.curveTo(37.679173, 294.06415, 40.04291, 292.42487, 42.830433, 291.2148);
		shape0.curveTo(45.620304, 290.00006, 48.650322, 289.3915, 51.92047, 289.3915);
		shape0.curveTo(54.83041, 289.3915, 57.55672, 290.0614, 60.10174, 291.39642);
		shape0.curveTo(62.646763, 292.73145, 64.82922, 294.46277, 66.64676, 296.5856);
		shape0.curveTo(68.4643, 298.71082, 69.919266, 301.1403, 71.01167, 303.8717);
		shape0.curveTo(72.10172, 306.60077, 72.647934, 309.36282, 72.647934, 312.15555);
		shape0.curveTo(72.647934, 318.46985, 70.3148, 323.63074, 65.64617, 327.6382);
		shape0.curveTo(60.9799, 331.64334, 55.13412, 334.0115, 48.10176, 334.73798);
		shape0.curveTo(53.6768, 337.53308, 59.430763, 338.92944, 65.36836, 338.92706);
		shape0.curveTo(70.21356, 338.92908, 74.94104, 338.04962, 79.54609, 336.28528);
		shape0.curveTo(84.14879, 334.52567, 88.17468, 332.1575, 91.63083, 329.18317);
		shape0.curveTo(95.08462, 326.2088, 97.87214, 322.74384, 99.99103, 318.7977);
		shape0.curveTo(102.10992, 314.85156, 103.171715, 310.63416, 103.171715, 306.14078);
		shape0.curveTo(103.171715, 304.43777, 102.98807, 302.5555, 102.62786, 300.49164);
		shape0.lineTo(95.72971, 266.7949);
		shape0.closePath();
		shape0.moveTo(95.18821, 27.488123);
		shape0.curveTo(93.97338, 27.245054, 92.88097, 27.122526, 91.91335, 27.122526);
		shape0.curveTo(88.153496, 27.122526, 84.66674, 29.035442, 81.453094, 32.861305);
		shape0.curveTo(78.23944, 36.684784, 75.44958, 41.664055, 73.08583, 47.794384);
		shape0.curveTo(70.72209, 53.927067, 68.87395, 60.816902, 67.53669, 68.46624);
		shape0.curveTo(66.20415, 76.11561, 65.53552, 83.76494, 65.53552, 91.41428);
		shape0.curveTo(65.53552, 94.57262, 65.6603, 97.60829, 65.900444, 100.521324);
		shape0.curveTo(66.145294, 103.43671, 66.57378, 106.22943, 67.18354, 108.89951);
		shape0.curveTo(91.9157, 86.92327, 104.28296, 67.131226, 104.28296, 49.525696);
		shape0.curveTo(104.28296, 41.14749, 101.25059, 33.80242, 95.18821, 27.488129);
		shape0.closePath();
		shape0.moveTo(99.00221, 259.339);
		shape0.curveTo(104.946884, 254.96826, 109.46247, 250.17062, 112.5584, 244.94841);
		shape0.curveTo(115.649635, 239.72855, 117.19643, 234.08412, 117.19643, 228.0104);
		shape0.curveTo(117.19643, 224.24825, 116.5584, 220.57571, 115.28471, 216.99045);
		shape0.curveTo(114.013374, 213.41226, 112.19585, 210.22327, 109.82974, 207.42818);
		shape0.curveTo(107.46365, 204.64017, 104.64317, 202.3923, 101.36832, 200.69638);
		shape0.curveTo(98.09346, 198.99811, 94.517235, 198.15132, 90.63966, 198.15132);
		shape0.curveTo(90.39717, 198.15132, 89.91217, 198.18202, 89.18469, 198.23862);
		shape0.curveTo(88.459564, 198.29991, 87.42836, 198.38959, 86.095825, 198.50752);
		shape0.lineTo(99.00221, 259.33902);
		shape0.closePath();
		shape0.moveTo(81.56374, 199.26225);
		shape0.curveTo(77.80625, 199.74579, 74.291245, 200.68694, 71.018745, 202.0833);
		shape0.curveTo(67.74624, 203.47968, 64.930466, 205.21097, 62.566727, 207.27484);
		shape0.curveTo(60.202988, 209.33873, 58.324238, 211.7069, 56.930477, 214.37697);
		shape0.curveTo(55.536716, 217.04941, 54.839836, 219.96243, 54.839836, 223.12077);
		shape0.curveTo(54.839836, 232.4684, 59.805107, 240.24039, 69.72858, 246.43204);
		shape0.curveTo(61.488445, 245.097, 54.882217, 241.91037, 49.91224, 236.86977);
		shape0.curveTo(44.94227, 231.83154, 42.458458, 225.48892, 42.458458, 217.83722);
		shape0.curveTo(42.458458, 213.3462, 43.397827, 209.00616, 45.276577, 204.81706);
		shape0.curveTo(47.155327, 200.62798, 49.669746, 196.86108, 52.819828, 193.51642);
		shape0.curveTo(55.974617, 190.16939, 59.670906, 187.27995, 63.911037, 184.85046);
		shape0.curveTo(68.15353, 182.41626, 72.63852, 180.71326, 77.36365, 179.74382);
		shape0.lineTo(69.72858, 143.31802);
		shape0.curveTo(52.640896, 156.18486, 39.703896, 168.81348, 30.917568, 181.19914);
		shape0.curveTo(22.131237, 193.58481, 17.738068, 205.84782, 17.738068, 217.99054);
		shape0.curveTo(17.738068, 224.66809, 19.221287, 230.98476, 22.192448, 236.93346);
		shape0.curveTo(25.163597, 242.88452, 29.165947, 248.07372, 34.197136, 252.50575);
		shape0.curveTo(39.228325, 256.94016, 45.048206, 260.43106, 51.656796, 262.9785);
		shape0.curveTo(58.263023, 265.53064, 65.26243, 266.8067, 72.655, 266.8067);
		shape0.curveTo(76.89749, 266.8067, 80.836266, 266.41043, 84.47134, 265.62262);
		shape0.curveTo(88.108765, 264.83246, 91.50134, 263.58704, 94.651436, 261.88876);
		shape0.lineTo(81.56374, 199.26225);
		shape0.closePath();
		g.setPaint(new Color(0, 0, 0, 255));
		g.fill(shape0);
	}

	private void paintCompositeGraphicsNode_0_0_0(Graphics2D g) {
		// _0_0_0_0
		AffineTransform trans_0_0_0_0 = g.getTransform();
		g.transform(new AffineTransform(1.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f));
		paintShapeNode_0_0_0_0(g);
		g.setTransform(trans_0_0_0_0);
	}

	private void paintCanvasGraphicsNode_0_0(Graphics2D g) {
		// _0_0_0
		AffineTransform trans_0_0_0 = g.getTransform();
		g.transform(new AffineTransform(1.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f));
		paintCompositeGraphicsNode_0_0_0(g);
		g.setTransform(trans_0_0_0);
	}

	private void paintRootGraphicsNode_0(Graphics2D g) {
		// _0_0
		g.setComposite(AlphaComposite.getInstance(3, 1.0f * origAlpha));
		AffineTransform trans_0_0 = g.getTransform();
		g.transform(new AffineTransform(1.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f));
		paintCanvasGraphicsNode_0_0(g);
		g.setTransform(trans_0_0);
	}



    /**
     * Returns the X of the bounding box of the original SVG image.
     * @return The X of the bounding box of the original SVG image.
     */
    public int getOrigX() {
        return 2;
    }

    /**
     * Returns the Y of the bounding box of the original SVG image.
     * @return The Y of the bounding box of the original SVG image.
     */
    public int getOrigY() {
        return 2;
    }

    /**
     * Returns the width of the bounding box of the original SVG image.
     * @return The width of the bounding box of the original SVG image.
     */
    public int getOrigWidth() {
        return 132;
    }

    /**
     * Returns the height of the bounding box of the original SVG image.
     * @return The height of the bounding box of the original SVG image.
     */
    public int getOrigHeight() {
        return 343;
    }
    
    
	/**
	 * The current width of this resizable icon.
	 */
	int width;

	/**
	 * The current height of this resizable icon.
	 */
	int height;

	/**
	 * Creates a new transcoded SVG image.
	 */
	public ResultingClassName() {
        this.width = getOrigWidth();
        this.height = getOrigHeight();
	}

	/*
	 * (non-Javadoc)
	 * @see javax.swing.Icon#getIconHeight()
	 */
    @Override
	public int getIconHeight() {
		return height;
	}

	/*
	 * (non-Javadoc)
	 * @see javax.swing.Icon#getIconWidth()
	 */
    @Override
	public int getIconWidth() {
		return width;
	}

	/*
	 * Set the dimension of the icon.
	 */

	public void setDimension(Dimension newDimension) {
		this.width = newDimension.width;
		this.height = newDimension.height;
	}

	/*
	 * (non-Javadoc)
	 * @see javax.swing.Icon#paintIcon(java.awt.Component, java.awt.Graphics, int, int)
	 */
    @Override
	public void paintIcon(Component c, Graphics g, int x, int y) {
		Graphics2D g2d = (Graphics2D) g.create();
		g2d.translate(x, y);

		double coef1 = (double) this.width / (double) getOrigWidth();
		double coef2 = (double) this.height / (double) getOrigHeight();
		double coef = Math.min(coef1, coef2);
		g2d.scale(coef, coef);
		paint(g2d);
		g2d.dispose();
	}
}

