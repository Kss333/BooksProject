$(document).ready(function(){
	
	//display a list of books
	$('#filterBooks').find('a').on('click', function(){
		var books = getList(this.text);
		$('#result').html('');
		for (var number in books) {
			$('#result').append('<div id="book'+ number +'" class="book"></div>');
			$('#book'+number).append('<img src="'+ books[number].image +'">')
					.append('<h3 class="title">' + books[number].titleBook + '</h3>')
					.append('<p class="author">by ' + books[number].author + '</p>')
					.append('<input class="rating form-control hide" value="' + books[number].rating + '" data-min="0" data-max="5" data-step="0.5" data-disabled="true" data-size="xs" data-show-clear="false" data-show-caption="false">');
		};					
	});
	$('#filterBooks a:first').trigger('click');

	//form validation "add a new book"
	$('#modal-add').on('click', function() {
        var 
        	formValid = true,
        	$isbn = $('#bookISBN'),
        	$group,
        	$input;
        $('.help-block').remove();
        $('.required').each(function() {
        	$group = $(this);
        	$group.removeClass('has-error');
        	$input = $group.find('input');
        	if ($input.val() == '') {
        		$group.addClass('has-error')
        			  .append('<span class="help-block">This field is required</span>');
        		formValid = false;
        	} 
        });
        //validation of the field ISBN
        if ($isbn.val().search(/^[0-9]+$/) == -1) {
        	formValid = false;
        	 $isbn.parent('.required').addClass('has-error')
        							  .append('<span class="help-block">Enter only numbers</span>');;
  		} 
  		//display success-message
    	if (formValid) {
       		$('#addModal').modal('hide');
       		$('#successModal').modal('show');
       		$('#messageBook').html('').append($('#bookTitle').val());
  		}
  	});
});

//return list of books by filter
function getList(filter) {
	
	var books = [];

		books[0] = {
    		titleBook: 'Jewels of Nizam',
			author: 'Geeta Devi',
			rating: 5,
			image: 'images/books/book-cover1.jpg'
		};
		books[1] = {
    		titleBook: 'Cakes & Bakes',
			author: 'Sanjeev Kapoor',
			rating: 5,
			image: 'images/books/book-cover2.jpg'
		};
		books[2] = {
    		titleBook: 'Jamie&#8217;s Kitchen',
			author: 'Jamie Oliver',
			rating: 4.5,
			image: 'images/books/book-cover3.jpg'
		};
		books[3] = {
    		titleBook: 'Inexpensive Family Meals',
			author: 'Simon Holst',
			rating: 4,
			image: 'images/books/book-cover4.jpg'
		};
		books[4] = {
    		titleBook: 'Paleo Slow Cooking',
			author: 'Chrissy Gower',
			rating: 4.5,
			image: 'images/books/book-cover5.jpg'
		};
		books[5] = {
    		titleBook: 'Cook Like an Italian',
			author: 'Tobie Puttock',
			rating: 4,
			image: 'images/books/book-cover6.jpg'
		};
		books[6] = {
    		titleBook: 'Suneeta Vaswani',
			author: 'Geeta Devi',
			rating: 5,
			image: 'images/books/book-cover7.jpg'
		};
		books[7] = {
    		titleBook: 'Jamie Does',
			author: 'Jamie Oliver',
			rating: 4,
			image: 'images/books/book-cover8.jpg'
		};
		books[8] = {
    		titleBook: 'Jamie&#8217;s italy',
			author: 'Jamie Oliver',
			rating: 5,
			image: 'images/books/book-cover9.jpg'
		};
		books[9] = {
    		titleBook: 'Vegetables Cookbook',
			author: 'Matthew Biggs',
			rating: 3.5,
			image: 'images/books/book-cover10.jpg'
		};

	switch (filter) {
		case 'All Books': return books;
		case 'Most Recent': return books.slice(0, 6);
		case 'Most Popular': return books.slice(0, 3);
		case 'Free Books': return books.slice(0, 1);
		default: return books;
	}
	return books; 
};
