import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExperimentAnalysisPresenter from './presenter'

import {
  selectRoutineFetchingStatus
} from '../../../redux/routine/selector'
import {
  selectSelectedRoutineTimeline
} from '../../../redux/reading/selector'
import {
  fetchRequest
} from '../../../redux/routine/actions'

class ExperimentAnalysis extends Component {
  componentWillMount () {
    this.props.requestRoutine(this.props.match.params)
  }

  render () {
    return (
      <ExperimentAnalysisPresenter
        fetching={this.props.fetching}
        error={this.props.error}
        timeline={this.props.timeline}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    ...selectRoutineFetchingStatus(state),
    timeline: selectSelectedRoutineTimeline(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestRoutine: routine => dispatch(fetchRequest(routine))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentAnalysis)
