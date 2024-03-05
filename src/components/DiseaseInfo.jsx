

function DiseaseInfo() {
    return <>
        <label htmlFor="train">Train disease</label>
        <select id='train'>
            <option value="1">1 (MS without T2D or CAD)</option>
            <option value="2a">2a (Severe obesity without diabetes or CAD)</option>
            <option selected value="2b">2b (Eligibility for bariatric surgery)</option>
            <option value="3">3 (T2D without CAD)</option>
            <option value="4">4 (First acute CAD event)</option>
            <option value="5">5 (Chronic CAD without heart failure)</option>
            <option value="6">6 (Chronic CAD with heart failure)</option>
            <option value="7">7 (Other non-CAD related heart failure)</option>
        </select>
    </>
}

export default DiseaseInfo