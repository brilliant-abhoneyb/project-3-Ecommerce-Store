import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerImgs = [
    {
      id: 1,
      img: '../../assets/banner-1.jpg',
    },
    {
      id: 2,
      img: '../../assets/banner-2.jpg',
    },
    {
      id: 3,
      img: '../../assets/banner-3.jpg',
    },
  ];

  getCategorisData:any;
  getApplianceProductData:any=[];
  getPhoneProductData:any=[];

    constructor(private getData:GetDataService){}
  
    ngOnInit(): void {
        this.getCategorisData = this.getData.categoriesData;
        
        this.getData.productData.filter((ele:any)=>{

            if(ele.pdCategory == 'laptops')
            {
                this.getApplianceProductData.push(ele);
            }
            if(ele.pdCategory=='phones')
            {
                this.getPhoneProductData.push(ele);
            }
          });
      }
}