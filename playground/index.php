<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/css/app.css">
    <link rel="stylesheet" href="/assets/css/editor.css">
    <title>Playground</title>
    <style>
        html, body {
            background: linear-gradient(to right, #93F9B9, #1D976C) !important;
        }
        body {
            padding: 2% 10%;
        }
    </style>
</head>
<body>
    <textarea id="editorSelector"><h2>MUDS v1.4.0 <a href="/download/muds-editor-v1.4.0.zip" download><i class="fa fa-download" aria-hidden="true"></i> Download</a></h2>
<ul>
    <li>Refine codeblock style</li>
    <li>Overhaul of how predefined content works
        <ul>
            <li>Implementing textarea for submittable content</li>
            <li>Implementing textarea for submittable content</li>
            <li>Implementing textarea for submittable content</li>
            <li>Implementing textarea for submittable content</li>
        </ul>
    </li>
    <li>Adding support for events
        <ul>
            <li>Adding event - <a href="https://muds.io/documentation/events/">docs</a></li>
        </ul>
    </li>
    <li>Fixing a bug where custom height wasn't reapplied when leaving fullscreen</li>
    <li>Fixing a bug where onChange events would produced errors unless defined</li>
    <li>Fixing a bug where tab wouldn't insert 4 spaces correctly</li>
</ul>
<blockquote class="muds-quote">Fixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctly</blockquote>
<p>Fixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctly</p>
<h3>Code Example</h3>
<pre>Fixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctlyFixing a bug where tab wouldn't insert 4 spaces correctly</pre>
    </textarea>

    <h1>adapkdnapid</h1>

    <script src="/assets/js/editor.js" ></script>
    <script>
        var muds = new muds({
            selector: 'editorSelector',
            submitName: 'mySubmit',
            placeholder: 'Type some text here...',
            height: '500px',
            theme: "royal",
            resize: true,
            required: true,
            keybindings: true,
            tooltips: true,
            onChange: function() {
                console.log('onChange event fired...!');
            },
            characterCount: true,
            menuStyle: 'custom',
            menuCustom: [
                'header',
                'fonts',
                'underline',
                'strikeThrough',
                'bold',
                'italic',
                'separator',
                'link',
                'blockquote',
                'code',
                'changeColor',
                'image',
                'undo',
                'redo',
                'justification',
                'unorderedList',
                'orderedList',
                'selectAll',
                'copy',
                'cut',
                'delete',
                'justifyLeft',
                'justifyCenter',
                'justifyRight',
                'indent',
                'outdent',
                'print',
                'showHTML',
                'showText',
                'fullScreen'
            ],
        });

    </script>
</body>
</html>