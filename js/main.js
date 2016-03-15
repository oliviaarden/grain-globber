var $ul = $('ul');

$ul.addClass('grains-list');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $description = $('<p>');

  $description.html(grain.desc);
  $h2.html(grain.name);
  $img.attr('src', 'images/' + grain.img);

  $figure.append($img, $h2, $description);
  $li.append($figure);
  $ul.append($li);
});
