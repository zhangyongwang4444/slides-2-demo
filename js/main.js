let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0


$(previous).on('click',function(){
	goToSlide(current - 1 )
})
$(next).on('click',function(){
	goToSlide(current +  1)
})


let timer = setInterval(function(){
	goToSlide(current + 1)
},2000)

$('.window').on('mouseenter',function(){
	window.clearInterval(timer)
}).on('mouseleave',function(){
	timer = setInterval(function(){
	goToSlide(current + 1)
},2000)
})



makeFakeSlides()
$slides.css({transform: 'translateX(-400px)'})
bindEvents()





function makeFakeSlides() {
	let $firstCopy = $images.eq(0).clone(true)
	let $lastCopy = $images.eq($images.length - 1).clone(true)

	$slides.append($firstCopy)
	$slides.prepend($lastCopy)
}

function bindEvents() {
	$('#buttonWrapper').on('click', 'button', function(e) {
		let $button = $(e.currentTarget)
		let index = $button.index()
		goToSlide(index)
	})
}

//goToSlide 精髓 的 一个函数 
function goToSlide(index){
	if(index > $buttons.length - 1){
		index  =  0 
	}else if (index < 0){
		index =  $buttons.length - 1 
	}
	console.log('current:'+ current,'index:' + index)
	if (current === $buttons.length - 1 && index === 0) {
			console.log('最后到最前')
			//从最后一张到第一张
			$slides.css({transform: `translateX(${-($buttons.length + 1) * 400 }px)`})
				.one('transitionend', function() {
					// console.log('动画完毕')
					$slides.hide().offset()
					$slides.css({transform: `translateX(${-(index + 1) * 400}px)`}).show()
				})
		} else if (current === 0 && index === $buttons.length - 1) {
			console.log('最前到最后')
			//从第一一张到最后一张
			$slides.css({transform: `translateX(0px)`})
				.one('transitionend', function() {
					// console.log('动画完毕')
					$slides.hide().offset()
					$slides.css({transform: `translateX(${-(index + 1 ) * 400 }px)`}).show()
				})
		} else {
			console.log('普通逻辑')
			$slides.css({transform: `translateX(${- ( index + 1 ) * 400 }px)`})
		}
		current = index 
}