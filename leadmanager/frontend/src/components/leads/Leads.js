import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getLeads } from '../../actions/leads'

export class Leads extends Component {
    componentDidMount = () => {
        this.props.getLeads()
    }

    render() {
        const { leadsProps } = this.props
        return (
            <Fragment>
                <h2>Leads</h2>
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
                            {leadsProps.map((lead_item) => (
                                <tr key={lead_item.id} >
                                    <th scope="row">{lead_item.id}</th>
                                    <td>{lead_item.name}</td>
                                    <td>{lead_item.email}</td>
                                    <td>{lead_item.message}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={null} >Delete</button>
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
});

// export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
export default connect(mapStateToProps, { getLeads })(Leads)
