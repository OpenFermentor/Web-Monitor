import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'
import _ from 'lodash'
import moment from 'moment'

const selectSensorsEntityRedux = state => state.entities.sensors

export const selectSensorsLastValue = createSelector(
  [selectSensorsEntityRedux],
  (sensors) => {
    return _.last(sensors.readings) || {}
  }
)

export const selectSensorsTimeline = createSelector(
  [selectSensorsEntityRedux],
  (sensors) => {
    const sensorReadings = Immutable.isImmutable(sensors.readings) ? sensors.readings.asMutable() : sensors.readings
    return {
      insertedAt: sensorReadings.map(({ insertedAt }) => insertedAt),
      labels: sensorReadings.map(({ insertedAt }) => moment(insertedAt).format('HH:mm:ss')),
      temp: sensorReadings.map(({ temp }) => temp),
      co2: sensorReadings.map(({ co2 }) => co2),
      density: sensorReadings.map(({ density }) => density),
      ph: sensorReadings.map(({ ph }) => ph)
    }
  }
)
