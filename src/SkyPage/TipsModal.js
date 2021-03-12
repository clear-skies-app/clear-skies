import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Alert, Button } from 'react-bootstrap';

function TipsAlert(props) {
	if (props.showModal) {
		return (
			<Alert variant='dark' onClose={props.handleModalToggle} dismissible>
				<Alert.Heading id='contained-modal-title-vcenter'>
					Stargazing Tips
				</Alert.Heading>
				<ListGroup>
					<ListGroup.Item>
						Choose a clear, (mostly) moon-less night to go out and
						find a location away from city lights.
					</ListGroup.Item>
					<ListGroup.Item>
						Plan out your observations before heading out. This
						helps you to prepare any special equipment you may need
						and also avoids the issue of having to look up something
						on your device once you’re out in the dark. You can use
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
			</Alert>
		);
	}
	return <Button onClick={props.onClick}>Show Tips</Button>;
}

export default TipsAlert;
