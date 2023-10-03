import os
import shutil

# os.remove('copy1.txt')

# path = "copy1.txt"
# os.remove(path)

# path = "Del"

path = "Text"

try:
    # os.remove(path)   # delete a file
    # os.rmdir(path)    # delete an empty folder
    shutil.rmtree(path)  # delete a directory containing files
except FileNotFoundError:
    print("That file was not found.")
except PermissionError:
    print("You do not have permission to delete empty folder.")
except OSError:
    print("Cannot delete non-empty folder using this function.")
else:
    print(path + " was deleted.")
