import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';
import { QuestionaryDialogComponent } from '../questionary-dialog/questionary-dialog.component';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent implements OnInit {
  private key: string = 'courseId';
  private courseId: string;
  questionnairesList: Array<Object>;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private firebase: FirebaseService,
  ) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.getQuestionnaires();
  }

  openQuestionaryDialog() {
  this.dialog.open(QuestionaryDialogComponent, { data: { courseId: this.courseId } });
  }

  private getQuestionnaires() {
    this.firebase
    .getFilterdData('questionnaires', this.key, this.courseId)
    .subscribe(questionnairesSnapshot => {
      this.questionnairesList = [];
        questionnairesSnapshot.forEach(data => {
          this.questionnairesList.push(this.buildQuestionary(data));
        });
      });
  }

  private buildQuestionary(data) {
    const doc = data.payload.doc;
    const docData = doc.data()
    return {
      id: doc.id,
      name: docData.name,
      description: docData.description,
      questions: docData.questions,
    };
  }

}
