import React from 'react';
import { ChevronsDown } from "react-feather";

function Calendar() {
    return (
        <>
            <div className="schedule-calendar">
                <div className="calendar-row day-row">
                    <div className="day day-name">M</div>
                    <div className="day day-name">T</div>
                    <div className="day day-name">W</div>
                    <div className="day day-name">T</div>
                    <div className="day day-name">F</div>
                    <div className="day day-name">S</div>
                    <div className="day day-name">S</div>
                </div>
                <div className="calendar-row">
                    <div className="day">&nbsp;</div>
                    <div className="day">&nbsp;</div>
                    <div className="day">1</div>
                    <div className="day event green" data-content="1" data-day="2" data-event="Eat at mom and dad's">2</div>
                    <div className="day">3</div>
                    <div className="day">4</div>
                    <div className="day">5</div>
                </div>
                <div className="calendar-row">
                    <div className="day">6</div>
                    <div className="day event purple" data-content="2" data-day="7" data-event="Meet customer in LA">7</div>
                    <div className="day">8</div>
                    <div className="day">9</div>
                    <div className="day">10</div>
                    <div className="day">11</div>
                    <div className="day">12</div>
                </div>
                <div className="calendar-row">
                    <div className="day">13</div>
                    <div className="day">14</div>
                    <div className="day">15</div>
                    <div className="day">16</div>
                    <div className="day">17</div>
                    <div className="day">18</div>
                    <div className="day">19</div>
                </div>
                <div className="calendar-row">
                    <div className="day">20</div>
                    <div className="day">21</div>
                    <div className="day event green" data-content="3" data-day="22" data-event="Frank's birthday">22</div>
                    <div className="day">23</div>
                    <div className="day event primary" data-content="4" data-day="24" data-event="Workout Session">24</div>
                    <div className="day">25</div>
                    <div className="day event purple" data-content="5" data-day="26" data-event="Project review">26</div>
                </div>
                <div className="calendar-row">
                    <div className="day">27</div>
                    <div className="day">28</div>
                    <div className="day">29</div>
                    <div className="day">30</div>
                    <div className="day"></div>
                    <div className="day"></div>
                    <div className="day"></div>
                </div>
                <div className="next-fab">
                    <ChevronsDown />
                </div>
            </div>
        </>
    );
}

export default Calendar;
