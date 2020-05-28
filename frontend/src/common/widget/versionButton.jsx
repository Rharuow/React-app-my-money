import React, { Component } from 'react'
import { connect } from 'react-redux'
import changeVersion from './versionButtonAction'
import { bindActionCreators } from 'redux'


class ButtonChangeVersion extends Component {
    render() {
        const { version, changeVersion } = this.props
        return (
            <div style={{marginLeft : "auto", marginRight: "10px", alignSelf: "center"}}>
                <button className="btn btn-warning" onClick={() => changeVersion(version)}>
                Trocar de versão
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ version: state.dashboard.version })
const mapDispatchToProps = dispatch => bindActionCreators({ changeVersion}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ButtonChangeVersion
)