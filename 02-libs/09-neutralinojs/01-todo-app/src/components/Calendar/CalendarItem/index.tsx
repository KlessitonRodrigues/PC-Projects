import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'

import * as styles from '../styles'

export type Props = {
  data: {
    styleType: styles.DayBoxStyles
    name?: string
    topLeft?: any
    bottomLeft?: any
    topRight?: any
    content?: any
  }
}

const CalendarItem = ({ data }: Props) => {
  return (
    <Grow in timeout={500}>
      <Box style={styles.dayBoxStyles(data.styleType)}>
        <Box style={data.styleType === 'day' ? styles.calendarItemContent : {}}>{data.content || data.name}</Box>
        <Box style={styles.calendarItemFloat('topLeft')}>{data.topLeft}</Box>
        <Box style={styles.calendarItemFloat('bottomLeft')}>{data.bottomLeft}</Box>
        <Box style={styles.calendarItemFloat('topRight')}>{data.topRight}</Box>
      </Box>
    </Grow>
  )
}

export default CalendarItem
