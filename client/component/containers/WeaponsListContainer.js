import { connect } from 'react-redux';
import toJS from './toJS/index';
import WeaponsListView from '../WeaponsListView';

const mapStateToProps = state => ({
  weapons: state.getIn(['character', 'equipped', 'weapons']),
});

const mapDispatchToProps = () => ({});

const WeaponsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(WeaponsListView));

export default WeaponsListContainer;
