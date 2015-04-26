using System.IO;

namespace HaxeUILayoutPreview {
    class Util {
        public static string ExtractPreviewContainer() {
            // tempfile = Path.GetTempPath() + "flashdeveloppreviewcontainer.swf";
            string tempfile = "I:\\flashdeveloppreviewcontainer.swf";
            byte[] data = Resources.flashdeveloppreviewcontainer;
            File.WriteAllBytes(tempfile, data);


            
            return tempfile;
        }
    }
}
