import './Info.css'

function GeneralInfo() {
    return <>
        <div className='graphTable'>
        <table align={"left"}>
            <tr>
                <th>
                    <h3>AUC</h3>
                </th>
            </tr>
            <tr>
                <td>
                    <img className='graph' src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/model_comparison_auc.png"/>
                </td>
            </tr>
            <tr>
                <td>
                    <img className='graph' src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_models_auc.png"/>
                </td>
            </tr>
            <tr>
                <td>
                    <img className='graph' src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_auc.png"/>
                </td>
            </tr>
        </table>
        <table align={"right"}>
            <tr>
                <th>
                    <h3>PR AUC</h3>
                </th>
            </tr>
            <tr>
                <td>
                    <img className='graph' src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/model_comparison_pr_auc.png"/>
                </td>
            </tr>
            <tr>
                <td>
                    <img className='graph' src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_models_pr_auc.png"/>
                </td>
            </tr>
            <tr>
                <td>
                    <img className='graph' src="https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/GENERAL%20PLOTS/correlation_heatmap_pr_auc.png"/>
                </td>
            </tr>
        </table>
        </div>
    </>
}

export default GeneralInfo