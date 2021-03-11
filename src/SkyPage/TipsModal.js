import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';

function TipsModal(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Stargazing Tips
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ListGroup>
					<ListGroup.Item>
						Choose a clear, (mostly) moon-less night to go out and
						find a location away from city lights.
					</ListGroup.Item>
					<ListGroup.Item>
						Plan out your observations before heading out. This
						helps you to prepare any special equipment you may need
						and also avoids the issue of having to look up something
						on your device once you’re out in the dark. (You can use
						Clear Skies to help plan your next adventure! &#128513;
					</ListGroup.Item>
					<ListGroup.Item>
						Allow your eyes to become fully dark-adapted once you’re
						on-site. Plan to allow at least 30mins for this and try
						to avoid looking at any bright lights (phones,
						flashlights, full moon, etc.), as even a quick glance
						can break your dark adaptation and you’ll have to
						restart.
					</ListGroup.Item>
					<ListGroup.Item>
						Use “Averted Vision”, meaning looking slightly to the
						side of the object you’re observing. This uses your
						peripheral vision and helps you detect faint objects
						that are invisible when you stare directly at them.
					</ListGroup.Item>
					<ListGroup.Item>
						Pack a blanket, sweater, water, snacks, and a flashlight
						(just in case) and most importantly, HAVE FUN!
					</ListGroup.Item>
					<ListGroup.Item>
						Bonus: Remember, you don’t need any fancy equipment to
						have fun star-gazing and enjoying the awesomeness of our
						night skies. There is so much available to observe with
						just our human eye. Clear Skies!
					</ListGroup.Item>
				</ListGroup>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default TipsModal;
