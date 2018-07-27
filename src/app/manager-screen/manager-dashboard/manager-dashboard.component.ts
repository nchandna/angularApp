import { Component, OnInit } from '@angular/core';
import {SharingService} from '../../shared/sharing-service';
import {Router} from '@angular/router';
import {ApplicationProperties} from '../../shared/properties/application-properties';

/**to access jquery**/
declare var $: any;

/**
 * component to see the list of customers.
 */
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
    /** instance to store datatable**/
  managerListTable: any;
  constructor( private data: SharingService , private  route: Router , private properties: ApplicationProperties) { }

  ngOnInit() {
      this.fetchManagerDataTable();
  }
    /** fetch managers data*/
    fetchManagerDataTable() {
        const self = this;
        this.managerListTable = $('#table_id_manager_dashboard')
            .DataTable(
                {
                    'ajax': {
                        'url': self.properties.CUSTOMER_LIST_URL ,
                        // 'url': '../../../assets/service-response/manager.json',
                        'dataSrc': '',
                        'type': 'GET',
                        data: {
                        },
                        'error': function (jqXHR, textStatus, errorThrown) {
                        }
                    },
                    'columnDefs': [{
                        'targets': [1, 2, 3, 4],
                        'bSortable': false
                    }
                    ]
                    ,
                    'serverSide': false,
                    'order': [[0, 'desc']],
                    'aoColumns': [
                        {
                            title: 'EvaId',
                            data: 'EvaID',
                            'searchable': true,
                            'bVisible': false
                        }
                        , {
                            title: 'Num. of Visit',
                            data: 'numOfVisit',
                            'searchable': true,
                        }, {
                            title: 'Nick Name',
                            data: 'nickName',
                            'searchable': true,
                        }, {
                            title: 'Registered Photo',
                            data: 'registeredPhotoString',
                            'searchable': true,
                            'mRender': function (data, type, full) {
                                return '<img src="data:image/png;base64,' + data + '" style="width: 40px">';
                            }
                        }, {
                            title: 'ACTION',
                            data: null,
                            defaultContent: '<button>Details</button>'
                        }
                    ], rowCallback: (row: Node, data: any, index: number) => {
                        $($('td', row)[$('td', row).length - 1]).unbind('click');
                        $($('td', row)[$('td', row).length - 1]).bind('click', () => {
                            this.data.updateEvaId(data.EvaID);
                            this.route.navigate(['manager/customerDetail']);

                        });
                    }
                }
            );
  }

}
