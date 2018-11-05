import React, { Component } from 'react'
import propTypes from 'prop-types'
import Cards from './../components/Cards'
import { connect } from 'react-redux'
import cardActions from './../actions/CardActions'

class panel extends Component {

    static PropTypes = {
        createCard: propTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.handleCreateCard = this.handleCreateCard.bind(this)
    }

    handleCreateCard() {
        this.props.createCard()
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>My Panel</h2>
                    </div>
                    <div className="panel-body">
                        <Cards />
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-primary" onClick={this.handleCreateCard}>
                            <i className="ion-plus-round"></i> Card
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCard: () => dispatch(cardActions.createCard())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(panel)