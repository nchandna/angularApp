import { Component, OnInit } from '@angular/core';
import {SharingService} from '../../shared/sharing-service';
import {Router} from '@angular/router';
import {ManagerService} from '../services/manager-service';

/** to Access Jquery*/
declare var $: any;
/** to Acess Moment js*/
declare  var moment: any;

/**
 * component for fetching visit details of customers.
 */
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html', providers: [ManagerService]
})

export class CustomerDetailComponent implements OnInit {
    /**registered evaId of customer**/
  evaId: any;
  /** data of customer**/
  customerData: any;
  /** number of customer visits*/
   customerListLength: any;
   /** storing the base 64 image locally*/
   imageVal: any;
  constructor(private data: SharingService , private route: Router, private managerService: ManagerService) {
  }

  ngOnInit() {

      const self = this;
      // subscribe the evaId and do the relevant customer detail fetching
      this.data.EVAId.subscribe(evaId => this.evaId = evaId)
       if (this.evaId === 0) {
        this.route.navigate(['manager'])
       } else {
           this.managerService.getCustomerDetailData(this.evaId).subscribe(data => {
               this.customerData = data;
               this.customerListLength = this.customerData.length;
               $.each(this.customerData, function(i, item) {
                    self.imageVal = 'data:image/jpg;base64,' +  self.customerData[i].detectedPhotoString;
                   $('<tr>').html(
                       '<td>' + self.customerListLength + '</td><td>' + moment(self.customerData[i].visitDate).format('MM/DD/YYYY')
                       +
                       '</td><td>' + '<img src ="' + self.imageVal + '" style="width: 40px" ' + '</td>').
                   appendTo('#records_table');
                   self.customerListLength = self.customerListLength - 1 ;
               });
           } );

       }
  }

}
