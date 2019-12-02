import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name


    constructor(props) {
        super(props);
        this.state = {
            guidList: [], studyData: [], loading: true, selectedTypeID: ""
        };

        fetch('api/Study/Get')
            .then(response => response.json())
            .then(data => {
                this.setState({ guidList: data, loading: false });
            });



        this.handleTypeIDChange = this.handleTypeIDChange.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }



    handleTypeIDChange(event) {
        this.setState({ selectedTypeID: event.target.value });
        
        var id = event.target.value;
        if (id !== "") {
            fetch('api/Study/GetStudyData/' + id)
                .then(response => response.json())
                .then(data => {
                    this.setState({ loading: false, studyData: data });
                });
            //if (this.state.studyData.length > 0)
            //this.renderStudyList(this.state.studyData);
        }

    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }



    render() {
        //const studies = this.state.guid
        var contents;
        if (this.state.selectedTypeID !== "") {
            contents = this.state.loading
                ? <p><em>Loading...</em></p>
                 :this.renderStudyList();
        }
        return (
            <div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="study">Plese Select Study</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="study" value={this.state.value}
                            onChange={this.handleTypeIDChange}>
                            <option value=""></option>
                            {this.state.guidList.map(item =>
                                <option key={item} value={item}>{item}</option>
                            )}
                        </select>
                    </div>
                </div >
               {contents}

            </div>

        );
    }

    renderStudyList() {

        return (
            <form>
                <div className="form-group row">
                    <label className=" col-md-12" htmlFor="guid"><h4>Details of the Study</h4></label>

                </div>

                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">GUID</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.guid}
                             readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Specific Character Set</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.specificCharacterSet}
                             readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Study InstanceUid</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyInstanceUid}
                             readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Patients Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.patientsName}
                             readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Patient Id</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.patientId}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Issuer Of PatientId</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.issuerOfPatientId}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Global PatientId</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.globalPatientId}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Patients BirthDate</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.patientsBirthDate}
                           readOnly="true" />
                    </div>
                </div >

                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Patients Age</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.patientsAge}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">PatientSex</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.patientSex}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">StudyDate</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyDate}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">GUID</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.guid}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">StudyTime</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyTime}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Accession Number</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.accessionNumber}
                           readOnly="true" />
                    </div>
                </div >

                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">StudyId</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyId}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">StudyDescription</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyDescription}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">ReferringPhysiciansName</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.referringPhysiciansName}
                           readOnly="true" />
                    </div>
                </div >

                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Number Of Study RelatedSeries</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.numberOfStudyRelatedSeries}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Number Of Study RelatedInstances</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.numberOfStudyRelatedInstances}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">User Requested</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.userRequested}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">FilmBagGuid</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.filmBagGuid}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">IsRemote</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.isRemote}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">StudyQueueStatusEnum</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyQueueStatusEnum}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Modality</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.modality}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">StudyStatusEnum</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyStatusEnum}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">NumberOfRelatedStudies</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.numberOfRelatedStudies}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">LastImageReceived</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.lastImageReceived}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Study Size</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studySize}
                           readOnly="true" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">NoImage</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.noImage}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Locked</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.locked}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">LockedAt</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.lockedAt}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">LockedUntil</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.lockedUntil}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">StudyImportTypeEnum</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.studyImportTypeEnum}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">Hidden</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.hidden}
                           readOnly="true" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">HasAttachments</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.hasAttachments}
                           readOnly="true" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">OrganisationSiteId</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.organisationSiteId}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">NumberOfAttachments</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.numberOfAttachments}
                           readOnly="true" />
                    </div>
                </div >
                <div className="form-group row">
                    <label className=" col-md-3" htmlFor="guid">InsertDateTime</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="guid" defaultValue={this.state.studyData.insertDateTime}
                           readOnly="true" />
                    </div>
                </div >




            </form >

        )

    }
}
