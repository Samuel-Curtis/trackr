import { CalendarBody, CalendarContainer, CalendarHeader } from '@howljs/calendar-kit'
import React from 'react'

/**
 * TODO 
 * @returns 
 */
export default function Timeline() {

    const myEvents = [
        {
            id: '1',
            title: 'Meeting with Team',
            start: { dateTime: '2026-01-17T10:00:00Z' },
            end: { dateTime: '2026-01-17T11:00:00Z' },
            color: '#4285F4',
        },
        {
            id: '2',
            title: 'Another thing I think?',
            start: { dateTime: '2026-01-17T12:00:00Z' },
            end: { dateTime: '2026-01-17T16:00:00Z' },
            color: '#42f44bff',
        }       
    ]
    
    return (
        <CalendarContainer 
            numberOfDays={1}
            events={myEvents}    
            allowDragToEdit={true}
            dragStep={15}    
        >
            <CalendarHeader
                dayBarHeight={60}
                
            />
            <CalendarBody />
        </CalendarContainer>
    )
}