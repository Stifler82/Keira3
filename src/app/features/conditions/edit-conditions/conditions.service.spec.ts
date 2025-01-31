import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MysqlQueryService } from '@keira-shared/services/mysql-query.service';
import { MockedMysqlQueryService, MockedToastrService } from '@keira-testing/mocks';
import { ToastrService } from 'ngx-toastr';
import { instance } from 'ts-mockito';
import { ConditionsHandlerService } from '../conditions-handler.service';
import { ConditionsService } from './conditions.service';

describe('ConditionsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: MysqlQueryService, useValue: instance(MockedMysqlQueryService) },
        { provide: ToastrService, useValue: instance(MockedToastrService) },
        ConditionsHandlerService,
        ConditionsService,
      ],
    }),
  );

  it('should be created', () => {
    const service: ConditionsService = TestBed.inject(ConditionsService);
    expect(service).toBeTruthy();
  });
});
