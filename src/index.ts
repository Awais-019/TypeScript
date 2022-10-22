function render(document: unknown) {
     // narrowing
     if (document instanceof WordDocument) {
         document.render();
     }
     
}
