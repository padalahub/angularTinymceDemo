Angular integration with TinyMCE5 editor
-----------------------------------------

 1. Avoid apiKey by self hosting (download tinymce and place it in assets folder) tinymce instead of cloud.
 2. As editor allows unlimited characters, need to write custom validator which can limit the text entered in editor.
 3. Initialise the editor with necessary plugins.
 4. Hide menu, statusbar, branding by setting flags to false.

Angular Tinymce Loading Page with plugins
![image](https://user-images.githubusercontent.com/77592417/110367081-36fab280-8015-11eb-9a6d-4a3a6108e89b.png)






Below screen shows how to set up vaoidators for maxlength in Angular tinymce
![image](https://user-images.githubusercontent.com/77592417/110367149-4ed23680-8015-11eb-8681-89915fdfa06f.png)


