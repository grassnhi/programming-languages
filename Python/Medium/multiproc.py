# running tasks in parallel (# concurrent) on a different cpu cores

from multiprocessing import Process, cpu_count
import time


def counter(num):
    count = 0
    while count < num:
        count += 1

def main():
    print(cpu_count())  # get number of additional processes can run

    a = Process(target=counter, args=(10000,)) # count from 0 to 100
    b = Process(target=counter, args=(50000,)) # count from 0 to 100

    a.start()
    b.start()

    a.join()
    b.join()

    print("Finished in: ", time.perf_counter(), " seconds")

if __name__ == '__main__':
    main()