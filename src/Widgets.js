import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return(
        <div className="widgets_article">
        <div className="widgets_articleLeft">
            <FiberManualRecordIcon />
        </div>

        <div className="widgets_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
        )
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>Emmanuel News</h2>
            <InfoIcon />
        </div>
        {newsArticle('EMMANUEL REACTJS PROJECT', 'Top news - 9099 readers')}
        {newsArticle('EMMANUEL REACTJS PROJECT', 'Top news - 9099 readers')}
        {newsArticle('EMMANUEL REACTJS PROJECT', 'Top news - 9099 readers')}
        {newsArticle('EMMANUEL REACTJS PROJECT', 'Top news - 9099 readers')}
        {newsArticle('EMMANUEL REACTJS PROJECT', 'Top news - 9099 readers')}
        {newsArticle('EMMANUEL REACTJS PROJECT', 'Top news - 9099 readers')}
    </div>
  )
}

export default Widgets