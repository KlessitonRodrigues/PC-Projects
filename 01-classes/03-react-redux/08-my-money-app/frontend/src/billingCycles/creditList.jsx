import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Field, arrayInsert, arrayRemove } from "redux-form"
import Grid from "../common/layout/grid"
import Input from "../common/form/input"

class CreditList extends Component {
    add(index, item = {}) {
        if (!this.props.readOnly)
            this.props.arrayInsert(
                "billingCycleForm",
                "credits",
                index,
                item
            )
    }

    remove(index) {
        if (!(this.props.readOnly || this.props.list.length === 1))
            this.props.arrayRemove(
                "billingCycleForm",
                "credits",
                index
            )
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, i) => (
            <tr key={i}>
                <td>
                    <Field
                        name={`credits[${i}].name`}
                        component={Input}
                        placeholder="a receber:"
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field
                        name={`credits[${i}].value`}
                        component={Input}
                        placeholder="R$:"
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary form-btn"
                        onClick={() => this.add(i + 1)}>
                        <i className="fa fa-plus" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning form-btn"
                        onClick={() => this.add(i + 1, item)}>
                        <i className="fa fa-clone" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.remove(i)}>
                        <i className="fa fa-close" />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className="table-actions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({
        arrayInsert,
        arrayRemove
    }, dispatch)

export default connect(null, mapDispatchToProps)(CreditList)