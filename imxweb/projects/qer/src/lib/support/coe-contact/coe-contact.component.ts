import { Component, OnInit } from '@angular/core';
import { MethodDescriptor, TimeZoneInfo } from 'imx-qbm-dbts';
import { AppConfigService, AuthenticationService } from 'qbm';


export interface CoeContactInterface {
  contactInfo: string;
  headCoe: string;
  serviceNow: string;
  confluence: string;
}

const CoeContactList: CoeContactInterface[] = [
  {headCoe: '', contactInfo: '', serviceNow: '', confluence: ''},
];


@Component({
  selector: 'ccc-coe-contact',
  templateUrl: './coe-contact.component.html',
  styleUrls: ['./coe-contact.component.scss']
})
export class CoeContactComponent implements OnInit {
  
  displayedColumns: string[] = ['headCoe', 'contactInfo', 'serviceNow', 'confluence'];
  CoEContactData = CoeContactList;

  constructor(
    private readonly config: AppConfigService,
    private readonly authentication: AuthenticationService
  ) {}
  
  public async ngOnInit(): Promise<void> {
    this.authentication.update();
    this.getApiData();
  }

 public async getApiData(): Promise<void> {
  const data: CoeContactInterface = await this.config.apiClient.processRequest(this.getSupportPageInfoMethodDescriptor());
  this.CoEContactData = [data];
 }

 private getSupportPageInfoMethodDescriptor(): MethodDescriptor<CoeContactInterface> {
  return {
    path: `/portal/SupportPageInfo`,
    method: 'GET',
    headers: {
      'imx-timezone': TimeZoneInfo.get(),
    },
    credentials: 'include',
    observe: 'response',
    responseType: 'json',
    };
  }
}
