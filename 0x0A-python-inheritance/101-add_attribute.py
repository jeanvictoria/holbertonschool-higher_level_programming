#!/usr/bin/python3

def add_attribute(obj, aname, value):

    if isinstance(obj, (bool, int, float, tuple, str, frozenset)):
        raise TypeError("can't add new attribute")
    else:
        setattr(obj, aname, value)
