(function() {
	var triggerBttn2 = document.getElementById( 'trigger-overlay2' ),
		overlay2 = document.querySelector( 'div#overlay2' ),
		closeBttn2 = overlay2.querySelector( 'button#btn2' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };


	function toggleOverlay2() {
		if( classie.has( overlay2, 'open' ) ) {
			classie.remove( overlay2, 'open' );
			classie.add( overlay2, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay2, 'close' );
			};
			if( support.transitions ) {
				overlay2.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay2, 'close' ) ) {
			classie.add( overlay2, 'open' );
		}
	}

	triggerBttn2.addEventListener( 'click', toggleOverlay2 );
	closeBttn2.addEventListener( 'click', toggleOverlay2 );
})();