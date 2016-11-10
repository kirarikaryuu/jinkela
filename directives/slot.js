Jinkela.register('SLOT', function(that, node) {
  var name = node.getAttribute('name');
  for (var i = 0; i < that.children.length; i++) {
    var child = that.children[i];
    if (child.getAttribute('slot') !== name) continue;
    child = child.element || child;
    node.parentNode.insertBefore(child, node);
  }
  node.remove();
});
