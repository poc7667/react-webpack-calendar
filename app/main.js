var React = require('react');
const EventCalendar = require('react-event-calendar');

import moment from 'moment';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Popover from 'react-bootstrap/lib/PopOver';
import Overlay from 'react-bootstrap/lib/Overlay';

const events = [
    {
        start: '2015-07-20',
        end: '2015-07-02',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        start: '2015-07-19',
        end: '2015-07-25',
        title: 'test event',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];

React.render( 
    <EventCalendar month={7} year={2015} events={events}  onEventClick={(ref, eventData) => console.log(eventData)} />,
    document.getElementById('app'));
