var index = 1;

function hideAll() {
	var sliders = document.getElementsByClassName('slider');
	for( var i = 0; i < sliders.length; i++) {
		sliders[i].style.display = 'none'
	}
}

function changeActive(n) {
	var dots = document.getElementsByClassName('dots');
	for (var i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace('active', '');
	}
	dots[n-1].className = dots[n-1].className + ' active';
}

function go(n) {
	var sliders = document.getElementsByClassName('slider');
	hideAll();
	sliders[n-1].style.display = 'block';
	changeActive(n);
	index = n;
}

// 左右翻页
function page(flag) {
	if (flag == -1) {
		index = index-1;
		if (index < 1) {
			index = 3;
		}
	}
	else {
		index = index+1;
		if (index > 3) {
			index = 1;
		}
	}
	go(index);
}