import { connect } from 'react-redux';
import RollListView from '../ScoreGenViews/RollListView';
import toJS from './toJS/index';
import action from '../actions';

const mapStateToProps = state => ({
  rolls: state.getIn(['data', 'rolls']),
});

const mapDispatchToProps = dispatch => ({
  setAbility: () => dispatch(action.setAbility()),
});

const RollListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(RollListView));

export default RollListContainer;
