using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Study_React.Models
{
    public class Study
    {
        public string GUID { get; set; }
        public string SpecificCharacterSet { get; set; }
        public string MyPropSpecificCharacterSeterty { get; set; }
        public string StudyInstanceUid { get; set; }
        public string PatientsName { get; set; }
        public string PatientId { get; set; }
        public string IssuerOfPatientId { get; set; }
        public string GlobalPatientId { get; set; }
        public string PatientsBirthDate { get; set; }
        public string PatientsAge { get; set; }
        public string PatientSex { get; set; }
        public string StudyDate { get; set; }
        public string StudyTime { get; set; }
        public string AccessionNumber { get; set; }
        public string StudyId { get; set; }
        public string StudyDescription { get; set; }
        public string ReferringPhysiciansName { get; set; }
        public int? ReferringPhysiciansId { get; set; }
        public int? NumberOfStudyRelatedSeries { get; set; }
        public int? NumberOfStudyRelatedInstances { get; set; }
        public bool? UserRequested { get; set; }
        public string FilmBagGuid { get; set; }
        public bool? IsRemote { get; set; }
        public string StudyQueueStatusEnum { get; set; }
        public string Modality { get; set; }
        public string StudyStatusEnum { get; set; }
        public string NumberOfRelatedStudies { get; set; }
        public DateTime? LastImageReceived { get; set; }
        public string StudySize { get; set; }
        public bool? NoImage { get; set; }
        public bool? Locked { get; set; }
        public DateTime? LockedAt { get; set; }
        public DateTime? LockedUntil { get; set; }
        public string StudyImportTypeEnum { get; set; }
        public bool? Hidden { get; set; }
        public DateTime? HiddenAt { get; set; }
        public DateTime? HiddenUntil { get; set; }
        public bool? HasAttachments { get; set; }
        public int? OrganisationSiteId { get; set; }
        public string OrganisationSite { get; set; }
        public int? NumberOfAttachments { get; set; }
        public string FusionEventId { get; set; }
        public DateTime? InsertDateTime { get; set; }
    }
}
