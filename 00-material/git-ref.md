/dev/fd/13:18: command not found: compdef
sumitkhandelwal@Sumits-MacBook-Air git-practice % git init
Initialized empty Git repository in /Users/sumitkhandelwal/Desktop/git-practice/.git/
sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
sumitkhandelwal@Sumits-MacBook-Air git-practice % git add first.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-fuiles
git: 'ls-fuiles' is not a git command. See 'git --help'.

sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch

- master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch dev  
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
  dev
- master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout dev
  Switched to branch 'dev'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
- dev
  master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
  first.txt
  second.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git add third.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
  first.txt
  second.txt
  third.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
  On branch dev
  Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

          new file:   third.txt

sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "third.txt added"
[dev a7e903f] third.txt added
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 third.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch dev
nothing to commit, working tree clean
sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout master
Switched to branch 'master'
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit a9b62562007d9d9a232a5c96073cfb46e84e31a9 (HEAD -> master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout dev
Switched to branch 'dev'
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (HEAD -> dev)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:44:52 2023 +0530

    third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch dev
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

        modified:   second.txt

no changes added to commit (use "git add" and/or "git commit -a")
sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout second.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch dev
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

        modified:   second.txt

no changes added to commit (use "git add" and/or "git commit -a")
sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout second.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch

- dev
  master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
  commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (HEAD -> dev)
  Author: Sumit Khandelwal <synergy2411@outlook.com>
  Date: Wed Oct 11 10:44:52 2023 +0530

      third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout master
Switched to branch 'master'
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit a9b62562007d9d9a232a5c96073cfb46e84e31a9 (HEAD -> master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
dev

- master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git merge dev
  Updating a9b6256..a7e903f
  Fast-forward
  third.txt | 0
  1 file changed, 0 insertions(+), 0 deletions(-)
  create mode 100644 third.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
  commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (HEAD -> master, dev)
  Author: Sumit Khandelwal <synergy2411@outlook.com>
  Date: Wed Oct 11 10:44:52 2023 +0530

      third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch -c test
sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch

- master
  test
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout test
  Switched to branch 'test'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-file
  git: 'ls-file' is not a git command. See 'git --help'.

The most similar command is
ls-files
sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
first.txt
second.txt
third.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch test
Untracked files:
(use "git add <file>..." to include in what will be committed)

        fourth.txt

nothing added to commit but untracked files present (use "git add" to track)
sumitkhandelwal@Sumits-MacBook-Air git-practice % git add fourth.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "fourth.txt added"
[test c773280] fourth.txt added
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 fourth.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit c773280bc5a6ac224a7da4fdf54a05cc8119fc4e (HEAD -> test)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:08:05 2023 +0530

    fourth.txt added

commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:44:52 2023 +0530

    third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
first.txt
fourth.txt
second.txt
third.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch test
Changes not staged for commit:
(use "git add/rm <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    fourth.txt

no changes added to commit (use "git add" and/or "git commit -a")
sumitkhandelwal@Sumits-MacBook-Air git-practice % git add .
sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "fourth.txt deleted"
[test 1e0cd2f] fourth.txt deleted
1 file changed, 0 insertions(+), 0 deletions(-)
delete mode 100644 fourth.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
first.txt
second.txt
third.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch test
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

        modified:   first.txt

no changes added to commit (use "git add" and/or "git commit -a")
sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout first.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit 1e0cd2fba65f036dddcab3049376bdbad8507e80 (HEAD -> test)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:10:11 2023 +0530

    fourth.txt deleted

commit c773280bc5a6ac224a7da4fdf54a05cc8119fc4e
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:08:05 2023 +0530

    fourth.txt added

commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:44:52 2023 +0530

    third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit 1e0cd2fba65f036dddcab3049376bdbad8507e80 (HEAD -> test)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:10:11 2023 +0530

commit 1e0cd2fba65f036dddcab3049376bdbad8507e80 (HEAD -> test)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:10:11 2023 +0530

    fourth.txt deleted

commit c773280bc5a6ac224a7da4fdf54a05cc8119fc4e
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:08:05 2023 +0530

    fourth.txt added

commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:44:52 2023 +0530

    third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch test
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

        modified:   first.txt

no changes added to commit (use "git add" and/or "git commit -a")
sumitkhandelwal@Sumits-MacBook-Air git-practice % git add first.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch test
Changes to be committed:
(use "git reset HEAD <file>..." to unstage)

        modified:   first.txt

sumitkhandelwal@Sumits-MacBook-Air git-practice % git reset HEAD first.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch test
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

        modified:   first.txt

no changes added to commit (use "git add" and/or "git commit -a")
sumitkhandelwal@Sumits-MacBook-Air git-practice % git add first.txt
sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
On branch test
Changes to be committed:
(use "git reset HEAD <file>..." to unstage)

        modified:   first.txt

sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "new content added"
[test d1b055f] new content added
1 file changed, 3 insertions(+), 1 deletion(-)
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit d1b055f5fe5f745bc4ff4652b40d9f504336b10e (HEAD -> test)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:32:04 2023 +0530

    new content added

commit 1e0cd2fba65f036dddcab3049376bdbad8507e80
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:10:11 2023 +0530

    fourth.txt deleted

commit c773280bc5a6ac224a7da4fdf54a05cc8119fc4e
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:08:05 2023 +0530

    fourth.txt added

commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:44:52 2023 +0530

    third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

sumitkhandelwal@Sumits-MacBook-Air git-practice % git reset --hard HEAD~1
HEAD is now at 1e0cd2f fourth.txt deleted
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit 1e0cd2fba65f036dddcab3049376bdbad8507e80 (HEAD -> test)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:10:11 2023 +0530

    fourth.txt deleted

commit c773280bc5a6ac224a7da4fdf54a05cc8119fc4e
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 11:08:05 2023 +0530

    fourth.txt added

commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:44:52 2023 +0530

    third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9
sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
master

- test
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch master
  fatal: A branch named 'master' already exists.
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout master
  Switched to branch 'master'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch -D test
  Deleted branch test (was 1e0cd2f).
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
- master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch dev
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout dev
  Switched to branch 'dev'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git add .
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "fourth.txt added"
  [dev df79f32] fourth.txt added
  1 file changed, 0 insertions(+), 0 deletions(-)
  create mode 100644 fourth.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
  commit df79f32a59a651904c144a8346cab87b0ed3ec0e (HEAD -> dev)
  Author: Sumit Khandelwal <synergy2411@outlook.com>
  Date: Wed Oct 11 12:26:32 2023 +0530

      fourth.txt added

commit a7e903fe853ec0b0bac2ae9db28207fba16fca60 (master)
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:44:52 2023 +0530

    third.txt added

commit a9b62562007d9d9a232a5c96073cfb46e84e31a9
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:28:08 2023 +0530

    second.txt added

commit ac308148f8d312181eac0b79acb26f0a0265cd1c
Author: Sumit Khandelwal <synergy2411@outlook.com>
Date: Wed Oct 11 10:20:42 2023 +0530

    first.txt added

sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout master
Switched to branch 'master'
sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
dev

- master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git add fifth.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "fifth.txt added"
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git merge dev
  Merge made by the 'recursive' strategy.
  fourth.txt | 0
  1 file changed, 0 insertions(+), 0 deletions(-)
  create mode 100644 fourth.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
  dev
- master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git add fourth.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "content added in fourth.txt from master"
  [master c1e1940] content added in fourth.txt from master
  1 file changed, 1 insertion(+)
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout dev
  Switched to branch 'dev'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git add fourth.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "content added from dev branch"
  [dev c14f17a] content added from dev branch
  1 file changed, 1 insertion(+)
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout master
  Switched to branch 'master'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git merge dev
  Auto-merging fourth.txt
  CONFLICT (content): Merge conflict in fourth.txt
  Automatic merge failed; fix conflicts and then commit the result.
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
  On branch master
  You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
(use "git add <file>..." to mark resolution)

        both modified:   fourth.txt

no changes added to commit (use "git add" and/or "git commit -a")
sumitkhandelwal@Sumits-MacBook-Air git-practice % git add .
sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "new changed received from dev"
[master b26d170] new changed received from dev
sumitkhandelwal@Sumits-MacBook-Air git-practice % git log
commit b26d170b4de79538971b072128eb67a6e73371fb (HEAD -> master)
sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch -M master
sumitkhandelwal@Sumits-MacBook-Air git-practice % git remote add origin https://github.com/synergy2411/git-practice-remote.git
sumitkhandelwal@Sumits-MacBook-Air git-practice % git push origin master
Counting objects: 24, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (17/17), done.
Writing objects: 100% (24/24), 2.01 KiB | 2.01 MiB/s, done.
Total 24 (delta 9), reused 0 (delta 0)
remote: Resolving deltas: 100% (9/9), done.
To https://github.com/synergy2411/git-practice-remote.git

- [new branch] master -> master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch --r
  origin/master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch --a
  error: Ambiguous option: a (could be --abbrev or --all)
  usage: git branch [<options>] [-r | -a] [--merged | --no-merged]
  or: git branch [<options>] [-l] [-f] <branch-name> [<start-point>]
  or: git branch [<options>] [-r] (-d | -D) <branch-name>...
  or: git branch [<options>] (-m | -M) [<old-branch>] <new-branch>
  or: git branch [<options>] (-c | -C) [<old-branch>] <new-branch>
  or: git branch [<options>] [-r | -a] [--points-at]
  or: git branch [<options>] [-r | -a] [--format]

Generic options
-v, --verbose show hash and subject, give twice for upstream branch
-q, --quiet suppress informational messages
-t, --track set up tracking mode (see git-pull(1))
-u, --set-upstream-to <upstream>
change the upstream info
--unset-upstream Unset the upstream info
--color[=<when>] use colored output
-r, --remotes act on remote-tracking branches
--contains <commit> print only branches that contain the commit
--no-contains <commit>
print only branches that don't contain the commit
--abbrev[=<n>] use <n> digits to display SHA-1s

Specific git-branch actions:
-a, --all list both remote-tracking and local branches
-d, --delete delete fully merged branch
-D delete branch (even if not merged)
-m, --move move/rename a branch and its reflog
-M move/rename a branch, even if target exists
-c, --copy copy a branch and its reflog
-C copy a branch, even if target exists
--list list branch names
-l, --create-reflog create the branch's reflog
--edit-description edit the description for the branch
-f, --force force creation, move/rename, deletion
--merged <commit> print only branches that are merged
--no-merged <commit> print only branches that are not merged
--column[=<style>] list branches in columns
--sort <key> field name to sort on
--points-at <object> print only branches of the object
-i, --ignore-case sorting and filtering are case insensitive
--format <format> format to use for the output

sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch -a
dev

- master
  remotes/origin/master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch -vv
  dev c14f17a content added from dev branch
- master b26d170 new changed received from dev
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git remote show origin
- remote origin
  Fetch URL: https://github.com/synergy2411/git-practice-remote.git
  Push URL: https://github.com/synergy2411/git-practice-remote.git
  HEAD branch: master
  Remote branch:
  master tracked
  Local ref configured for 'git push':
  master pushes to master (up to date)
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout dev
  Switched to branch 'dev'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git push origin dev  
  Total 0 (delta 0), reused 0 (delta 0)
  remote:
  remote: Create a pull request for 'dev' on GitHub by visiting:
  remote: https://github.com/synergy2411/git-practice-remote/pull/new/dev
  remote:
  To https://github.com/synergy2411/git-practice-remote.git
- [new branch] dev -> dev
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
- dev
  master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git pull origin dev
  remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (2/2), done.
  remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
  Unpacking objects: 100% (3/3), done.
  From https://github.com/synergy2411/git-practice-remote
- branch dev -> FETCH_HEAD
  c14f17a..0d5f533 dev -> origin/dev
  Updating c14f17a..0d5f533
  Fast-forward
  sixth.txt | 1 +
  1 file changed, 1 insertion(+)
  create mode 100644 sixth.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git remote
  origin
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch -a
- dev
  master
  remotes/origin/dev
  remotes/origin/master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % >....
- master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git checkout dev
  Switched to branch 'dev'
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git branch
- dev
  master
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
  first.txt
  second.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git add third.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git ls-files
  first.txt
  second.txt
  third.txt
  sumitkhandelwal@Sumits-MacBook-Air git-practice % git status
  On branch dev
  Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

          new file:   third.txt

sumitkhandelwal@Sumits-MacBook-Air git-practice % git commit -m "third.txt added"
[dev a7e903f] third.txt added
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 third.txt
