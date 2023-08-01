import $ from "jquery";

document.addEventListener('DOMContentLoaded', () => {
    const addParagraph = (text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        document.body.appendChild(paragraph);
    };

    $(document).ready(() => {
        addParagraph('This is the first paragraph added using jQuery!');
        addParagraph('This is the second paragraph added using jQuery!');
        addParagraph('This is the third paragraph added using vanilla JavaScript!');
      });
    });