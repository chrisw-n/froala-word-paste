import React, { useRef } from 'react';
import './App.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import "froala-editor/js/plugins.pkgd.min.js";
import 'froala-editor/js/third_party/font_awesome.min.js';

import { FroalaOptions } from 'froala-editor';
import FroalaEditorComponent from "react-froala-wysiwyg";


function App() {
    const editorRef = useRef<FroalaEditorComponent | null>(null);

    const config: Partial<FroalaOptions> = {
        attribution: false,
        zIndex: 10,
        height: 800,
        htmlExecuteScripts: false,
        wordPasteModal: false,
        wordPasteKeepFormatting: false,
        listAdvancedTypes: false,
        linkEditButtons: ["linkOpen", "linkEdit", "linkRemove"],
        requestWithCORS: false,
        imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
        imagePaste: true,
        imagePasteProcess: true,
        imageMaxSize: 10 * 1024 * 1024, // 10mb
        imageUpload: true,
        imageUploadURL: "https://i.froala.com/upload?1",
        imageUploadMethod: "PUT",
        imageInsertButtons: ["imageUpload"],

        placeholderText: "",
        toolbarButtons: {
            moreText: {
                buttons: [
                    "bold",
                    "italic",
                    "underline",
                    "strikeThrough",
                    "subscript",
                    "superscript",
                    "fontSize",
                    "textColor",
                    "clearFormatting"
                ]
            },
            moreRich: {
                buttons: [
                    "formatOL",
                    "formatUL",
                    "align",
                    "insertTable",
                    "insertLink",
                    "insertImage"
                ],
                buttonsVisible: 6
            },
            moreMisc: {
                buttons: [
                    "undo",
                    "redo",
                    "fullscreen",
                    "spellChecker",
                    "html"
                ],
                align: "right",
                buttonsVisible: 2
            }
        },
        tableEditButtons: [
            "tableHeader",
            "tableRemove",
            "|",
            "tableRows",
            "tableColumns",
            "-",
            "tableCells",
            "tableCellBackground",
            "tableCellVerticalAlign",
            "tableCellHorizontalAlign"
        ],
        events: {
            "image.beforeUpload": function (this: any, images: any): boolean {
                console.log("beforeUpload triggered")
                return false;
            }
        }
    };
    return (
        <div>
            <FroalaEditorComponent
                ref={editorRef}
                tag="textarea"
                config={config}
                model={"<div>hello world!</div>"}
            />
        </div>
    );
}

export default App;
