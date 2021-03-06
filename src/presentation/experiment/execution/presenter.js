import React from 'react'
import './styles.css'
import Network from '../../../networking'

import Screen from '../../common/screen'
import Container from '../../common/container'
import SensorChart from '../../common/sensor_chart'
import Button from '../../common/button'

import NavigationChart from './navigation_chart'
import LogEntry from './log_entry'

const ExperimentExecutionPresenter = ({ routine = {}, timeline, logEntries, fetching, error }) => {
  return (
    <Screen loading={fetching || timeline.labels.lenght === 0} classes='analysis' center={false}>

      <div className='analysisContent'>
        <div className='data'>

          <Container row>

            <h2 className='titleHeader'>{routine.title}</h2>
            <Container row end>
              <a href={Network.routineToCsvUrl(routine)}>
                <Button primary>Exportar a csv</Button>
              </a>
              <Button primary onClick={() => window.print()}>Imprimir</Button>
            </Container>
          </Container>

          <Container>
            <h3>Temperatura</h3>
            <SensorChart
              magnitudes={['temp']}
              timeline={timeline}
            />
          </Container>

          <Container>
            <h3>pH</h3>
            <SensorChart
              magnitudes={['ph']}
              timeline={timeline}
            />
          </Container>

          <Container>
            <h3>Producto</h3>
            <SensorChart
              magnitudes={['product']}
              timeline={timeline}
            />
          </Container>

          <Container>
            <h3>Sustrato</h3>
            <SensorChart
              magnitudes={['substratum']}
              timeline={timeline}
            />
          </Container>

          <Container>
            <h3>Biomasa</h3>
            <SensorChart
              magnitudes={['biomass']}
              timeline={timeline}
            />
          </Container>
        </div>

        <div className='events'>
          <Container>
            <h2>Eventos</h2>
            { logEntries.map(logEntry =>
              <LogEntry key={logEntry.id} logEntry={logEntry} />
            )}

          </Container>
        </div>
      </div>

      <NavigationChart />
    </Screen>
  )
}

export default ExperimentExecutionPresenter
