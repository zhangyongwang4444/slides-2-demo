let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({
	transform: 'translateX(-400px)'
})
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
		if (current === $buttons.length - 1 && index === 0) {
			console.log(1)
			//从最后一张到第一张
			$slides.css({transform: `translateX(${-($buttons.length + 1) * 400 }px)`})
				.one('transitionend', function() {
					// console.log('动画完毕')
					$slides.hide().offset()
					$slides.css({transform: `translateX(${-(index + 1) * 400}px)`}).show()
				})
		} else if (current === 0 && index === $buttons.length - 1) {
			console.log(2)
			//从第一一张到最后一张
			$slides.css({transform: `translateX(0px)`})
				.one('transitionend', function() {
					// console.log('动画完毕')
					$slides.hide().offset()
					$slides.css({transform: `translateX(${-(index + 1 ) * 400 }px)`}).show()
				})
		} else {
			console.log(3)
			$slides.css({transform: `translateX(${- ( index + 1 ) * 400 }px)`})
		}
		current = index 
	})
	// $buttons.eq(0).on('click', function() {
	// 	if (current == 2) {
	// 		console.log('说明你是从最后一张到第一张')
	// 		$slides.css({
	// 				transform: 'translateX(-1600px'
	// 			})
	// 			.one('transitionend', function() {
	// 				console.log('动画完毕')
	// 				$slides.hide()
	// 					.offset()
	// 				$slides.css({
	// 						transform: 'translateX(-400px'
	// 					})
	// 					.show()
	// 			})
	// 	} else {
	// 		$slides.css({
	// 			transform: 'translateX(-400px'
	// 		})
	// 	}

	// 	current = 0
	// })

	// $buttons.eq(1).on('click', function() {
	// 	$slides.css({
	// 		transform: 'translateX(-800px'
	// 	})
	// 	current = 1
	// })

	// $buttons.eq(2).on('click', function() {
	// 	if (current == 0) {
	// 		console.log('说明你是从第一张到最后一张')
	// 		$slides.css({
	// 				transform: 'translateX(0px'
	// 			})
	// 			.one('transitionend', function() {
	// 				console.log('动画完毕')
	// 				$slides.hide()
	// 					.offset()
	// 				$slides.css({
	// 						transform: 'translateX(-1200px'
	// 					})
	// 					.show()
	// 			})
	// 	} else {
	// 		$slides.css({
	// 			transform: 'translateX(-1200px'
	// 		})
	// 	}
	// 	current = 2
	// })
}