// var React = require('react');
// const EventCalendar = require('react-event-calendar');

// const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December', ];

// const events = [
//     {
//         start: '2015-01-15',
//         end: '2015-01-20',
//         title: 'Jan Event',
//         description: 'This is a test description of an event',
//     },
//     {
//         start: '2015-06-20',
//         end: '2015-07-02',
//         title: 'test event',
//         description: 'This is a test description of an event',
//     },
//     {
//         start: '2015-07-04',
//         end: '2015-07-05',
//         title: 'Short Event',
//         description: 'This is a test description of an event',
//     },
//     {
//         start: '2015-07-07',
//         end: '2015-07-13',
//         title: '2 week event with a nice long title ',
//         description: 'This is a test description of an event',
//     },
//     {
//         start: '2015-06-15',
//         end: '2015-08-15',
//         title: 'This is a multi-month event ',
//         description: 'This is a test description of an event',
//     },
//     {
//         start: '2015-07-7',
//         end: '2015-07-10',
//         title: '3rd Event',
//         description: 'This is a test description of an event',
//     },
//     {
//         start: '2015-07-10',
//         end: '2015-07-12',
//         title: '4th Event',
//         description: 'This is a test description of an event',
//     },
// ];

// class App extends React.Component {

//     constructor() {
//         super();

//         this.getState = this.getState.bind(this);
//         this.getHumanDate = this.getHumanDate.bind(this);
//         this.handleNextMonth = this.handleNextMonth.bind(this);
//         this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
//         this.handleToday = this.handleToday.bind(this);
//         this.handleEventClick = this.handleEventClick.bind(this);
//         this.handleEventMouseOver = this.handleEventMouseOver.bind(this);
//         this.handleEventMouseOut = this.handleEventMouseOut.bind(this);

//         this.state = {
//             moment: moment('2015-07-01'),
//             showPopover: false,
//             popoverTitle: null,
//             popoverContent: null,
//             popoverTarget: null,
//         };
//     }

//     handleNextMonth() {
//         this.setState({
//             moment: this.state.moment.add(1, 'M'),
//         });
//     }

//     handlePreviousMonth() {
//         this.setState({
//             moment: this.state.moment.subtract(1, 'M'),
//         });
//     }

//     handleToday() {
//         this.setState({
//             moment: moment(),
//         });
//     }

//     handleEventMouseOver(ref, data) {
//         this.setState({
//             showPopover: true,
//             popoverTarget: () => React.findDOMNode(this.refs.eventCalendar.refs[ref]),
//             popoverTitle: data.title,
//             popoverContent: data.description,
//         });
//     }

//      handleEventMouseOut() {
//         this.setState({
//             showPopover: false,
//         });
//      }

//     handleEventClick(ref, data) {
//         alert('Maybe you want to go somewhere!')
//     }

//     getState(now) {
//         return {
//             moment: now,
//         };
//     }

//     getHumanDate() {
//         return [moment.months('MM', this.state.moment.month()), this.state.moment.year(), ].join(' ');
//     }

//     render() {

//         const styles = {
//             position: 'relative',
//         };

//         return (
//             <div style={styles}>
//             <Overlay
//                 show={this.state.showPopover}
//                 rootClose={true}
//                 onHide = {()=>this.setState({showPopover: false, })}
//                 placement="top"
//                 container={this}
//                 target={this.state.popoverTarget}>
//               <Popover id="event" title={this.state.popoverTitle}>{this.state.popoverContent}</Popover>
//             </Overlay>
//                 <Row>
//                     <Col xs={6}>
//                         <ButtonToolbar>
//                             <Button onClick={this.handlePreviousMonth}>&lt;</Button>
//                             <Button onClick={this.handleNextMonth}>&gt;</Button>
//                             <Button onClick={this.handleToday}>Today</Button>
//                         </ButtonToolbar>
//                     </Col>
//                      <Col xs={6}>
//                         <div className="pull-right h2">{this.getHumanDate()}</div>
//                      </Col>
//                 </Row>
//                 <br />
//                 <Row>
//                     <Col xs={12}>
//                         <EventCalendar
//                             ref="eventCalendar"
//                             month={this.state.moment.month()}
//                             year={this.state.moment.year()}
//                             events={events}
//                             onEventClick={this.handleEventClick}
//                             onEventMouseOver={this.handleEventMouseOver}
//                             onEventMouseOut={this.handleEventMouseOut}
//                             />
//                     </Col>
//                 </Row>
//             </div>
//         );
//     }
// }

// export default App;

// React.render(<App />, document.getElementById('app'));
