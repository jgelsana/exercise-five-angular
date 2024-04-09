import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent implements OnInit {
  blog: Blog;
  blogForm: FormGroup;
  commentsFormArray: FormArray;
  isEditMode: boolean = false;
  blogData: any;
  blogId: string = ''

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {
    this.blog = {} as Blog;
    this.blogForm = {} as FormGroup;
    this.commentsFormArray = {} as FormArray;
  }

  blogs: Observable<Object> = this.blogService.getBlogs();

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.blogId = params['id']; 
      if (id) {
        this.isEditMode = true;
        this.blogService.getBlogById(id).subscribe((blog: any) => {
          if (blog) {
            this.blog = blog;
            this.populateForm(blog);
          } else {
            console.log('Blog does not exist.')
          }
        });
      }
    });
  }

  private initForm(): void {
    this.blogForm = this.fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([
        new FormControl('')
      ]),
    })

    this.commentsFormArray = this.blogForm.controls['comments'] as FormArray
  }


  private populateForm(blog: Blog): void {
    this.blogForm.patchValue({
      title: blog.title,
      description: blog.description,
      author: blog.author,
    });
    blog.comments.forEach(comment => {
      this.commentsFormArray.push(this.fb.control(comment));
    }

    )
  }

  addComment() {
    this.commentsFormArray.push(new FormControl(''));
  }

  deleteComment(index:number) {
    this.commentsFormArray.removeAt(index);
  }

  submit(newBlog: Blog): void {
    if(this.isEditMode) {
      this.blogService.updateBlog(this.blogId, newBlog).subscribe(() => {this.resetForm()});
    } else {
      this.blogService.addBlog(newBlog).subscribe(() => {this.resetForm()});
    }
  }

  resetForm(): void {
    this.blogForm.reset();
  }

}
