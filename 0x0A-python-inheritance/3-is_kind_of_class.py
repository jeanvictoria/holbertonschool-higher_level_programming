#!/usr/bin/python3
"""
Function that returns if the object is an instance of, or if the object
is an instance of a class that inherited from, the specified class.
"""


def is_kind_of_class(obj, a_class):
    """
    True if instance else False
    """
    if isinstance(obj, a_class):
        return(True)
    else:
        return(False)
