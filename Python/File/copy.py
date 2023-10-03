import shutil

shutil.copyfile("test.txt", "copy.txt")  # src, dst -> copy contents of file

shutil.copy("test.txt", "copy.txt")  # copyfile() + destination can be a directory

shutil.copy2(
    "test.txt", "copy.txt"
)  # copy() + copies metadata (file's creation and modification times)
