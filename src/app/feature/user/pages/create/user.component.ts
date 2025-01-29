import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHttpService } from 'src/app/shared/services/login-services';
import { UserDto } from 'src/app/shared/dto/login-dto';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/shared/modules/material-module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class AuthComponent implements OnInit {


 allusers: UserDto[]=[];
 displayedColumns: string[] = ['id', 'name', 'lastName', 'identification', 'email', 'lastConnectionDate'];
 dataSourceUser!: MatTableDataSource<UserDto>;

  constructor( private userHttpService: UserHttpService
    ) {
    }
  ngOnInit(): void {
    this.userHttpService.getAll().subscribe({
      next: (responseUsers) => {
        this.allusers = responseUsers;
        this.dataSourceUser = new MatTableDataSource(this.allusers);
      },
      error: () => {

      }
    })
  }
  

}
