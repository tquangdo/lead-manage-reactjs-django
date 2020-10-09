import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getLeads, deleteLead } from '../../actions/leads'

export class Leads extends Component {
    componentDidMount = () => {
        this.props.getLeads()
    }

    render() {
        const { leadsProps, deleteLead } = this.props
        return (
            <Fragment>
                <h2>Users</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leadsProps.map((lead_item, chiso) => (
                                <tr key={chiso} >
                                    <th scope="row">{chiso + 1}</th>
                                    <td>{lead_item.name}</td>
                                    <td>{lead_item.email}</td>
                                    <td>{lead_item.message}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteLead(lead_item.id)} >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leadsProps: state.leadsReducer.leadsState,
})

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
