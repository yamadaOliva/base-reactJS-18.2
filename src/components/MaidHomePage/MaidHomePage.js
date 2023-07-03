import React, { useState } from "react"
import dayjs from "dayjs"
import range from "lodash-es/range"
import { FiCircle } from 'react-icons/fi';
import "./MaidHomePage.scss"
require('dayjs/locale/ja')
 

dayjs.locale('ja')

const weekDays = ["月", "火", "水", "木", "金", "土", "日"]

const todayObj = dayjs()

const Calendar = () => {
  const [dayObj, setDayObj] = useState(dayjs())

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month() // (January as 0, December as 11)
  const daysInMonth = dayObj.daysInMonth()

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
  const weekDayOf1 = dayObjOf1.day() // (Sunday as 0, Saturday as 6)

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
  const weekDayOfLast = dayObjOfLast.day()

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"))
  }

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"))
  }

  return (
    
    
      <div className="maidhome">
        <div className="left-bib">
          <div className="head"></div>
          <div className="evaluate-icon">
            <div className="icon-inner">
              <div className="icon-inner-box">
                <div className="icon-content">
                4.0
                </div>
              </div>
            </div>
            <FiCircle className="edit-size-icon"/>
            
          </div>
          
          <div className="below-icon-title">
            総合評価
          </div>
          <div className="request-icon">
            <div className="icon-inner">
              <div className="icon-inner-box">
                <div className="icon-content">
                3
                </div>
              </div>
            </div>
            <FiCircle className="edit-size-icon"/>
          </div>
          <div className="below-icon-title">
          今月の完了したリクエスト
          </div>
          <div className="complate-rq-icon">
            <div className="icon-inner">
              <div className="icon-inner-box">
                <div className="icon-content">
                20
                </div>
              </div>
            </div>
            <FiCircle className="edit-size-icon"/>
          </div>
          <div className="below-icon-title">
          完了したリクエストの総数<br/>
          （アプリを使い始めてから）
          </div>
        </div>  
        <div className="calendar-box">
          <div className="calendar">
            <div className="header">
              <button type="button" className="nav nav--left" onClick={handlePrev}>
                &lt;
              </button>
              <div className="datetime">{dayObj.format("YYYY")}&nbsp; &nbsp;{dayObj.format("MMM")}</div>
              <button type="button" className="nav nav--right" onClick={handleNext}>
                &gt;
              </button>
            </div>
            <div className="footer"></div>
            <div className="week-container">
              {weekDays.map(d => (
                <div className="week-cell" key={d}>
                  {d}
                </div>
              ))}
            </div>
            <div className="day-container">
              {range(weekDayOf1 - 1).map(i => (
                <div className="day-cell day-cell--faded" key={i}>
                  {dayObjOf1.subtract(weekDayOf1 - 1 - i, "day").date()}
                </div>
              ))}

              {range(daysInMonth).map(i => (
                <button
                  className={`day-cell day-cell--in-month${
                    i + 1 === todayObj.date() &&
                    thisMonth === todayObj.month() &&
                    thisYear === todayObj.year()
                      ? " day-cell--today"
                      : ""
                  }`}
                  key={i}
                >
                  {i + 1}
                </button>
              ))}

              {range(6 - weekDayOfLast + 1).map(i => (
                <div className="day-cell day-cell--faded" key={i}>
                  {dayObjOfLast.add(i + 1, "day").date()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Calendar