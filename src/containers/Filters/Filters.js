import React, { PureComponent } from 'react'
import Checkbox from '../../components/Checkbox'
import Input from '../../components/UI/Input';

import { connect } from 'react-redux';
import { toggleFilter, searchFilter } from '../../actions/filterAction';

import './Filters.scss';

class Filters extends PureComponent {

    toggleCheckboxChange = type => {
        this.props.toggleFilter(type);
    }

    handleChangeInput = e => {
        this.props.searchFilter(e.target.value);
    }

    renderListSizesCheckbox = (arrType) => (
        <div className="Filter">
        {
            arrType.map(type => {
                const objType = this.props.filter[type];
                return <Checkbox key={objType.type} label={objType.type} isChecked={objType.isChecked} toggleCheckboxChange={this.toggleCheckboxChange} />
            })
        }
        </div>
        
    )

    render() {
        return (
            <div className='Filters'>
                <div className="Search">
                    <Input 
                        handleChangeInput={this.handleChangeInput} 
                        value={this.props.filter.searchText}
                        placeholder="Searching..." />
                </div>
                {!!this.props.filter.visibleType.length && this.renderListSizesCheckbox(this.props.filter.visibleType)}
            </div>
        )
    }
}

const mapState = (state) => {  return {
    filter: state.filter
}}

const mapDispatch = {
    toggleFilter,
    searchFilter
};

export default connect(mapState, mapDispatch)(Filters);
