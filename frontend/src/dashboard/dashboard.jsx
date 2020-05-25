import React, { useState, useEffect } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

const Dashboard = props => (
    <div>
        <ContentHeader title="Dashboard" small="Versão 1.0"/>
        <Content>
            Dashboard
        </Content>
    </div>
)

export default Dashboard