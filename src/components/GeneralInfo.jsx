import './Info.css'


function GeneralInfo() {
    return <>
        <div className='graphTable'>
        <table align={"left"}>
            <tbody>
            <tr>
                <td>
                    <h3>AUC</h3>
                </td>
                <td>
                    <img className='graph'
                         src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/model_comparison_auc.png"/>
                </td>
                <td>
                    <img className='graph'
                         src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_models_auc.png"/>
                </td>
                <td>
                    <img className='graph'
                         src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_auc.png"/>
                </td>
            </tr>
            <tr>
                <td>
                    <h3 style={{width:"80px"}}>PR AUC</h3>
                </td>
                <td>
                    <img className='graph'
                         src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/model_comparison_pr_auc.png"/>
                </td>
                <td>
                    <img className='graph'
                         src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_models_pr_auc.png"/>
                </td>
                <td>
                    <img className='graph'
                         src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_pr_auc.png"/>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </>
}

export default GeneralInfo